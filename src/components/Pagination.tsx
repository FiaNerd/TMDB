import { useEffect, useState } from "react"
import classNames from "classnames"
import styles from "../assets/pagination.module.scss"
import { useLocation, useNavigate } from "react-router-dom"

interface IProps {
	totalPages: number
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Pagination = ({ totalPages }: IProps) => {
	const [page, setPage] = useState(1)
	const location = useLocation()

	const resource = location.pathname.replace("/", "")
	const navigate = useNavigate()

	const handlePagination = (updatePage: number) => {
		setPage(updatePage)
		navigate(`/${resource}?page=${updatePage}`)
	}

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search)
		const pageParam = searchParams.get("page")
		const page = pageParam ? Number(pageParam) : 1

		if (!isNaN(page) && page >= 1) {
			setPage(page)
		}
	}, [location.search])

	if (totalPages === 1) {
		return (
			<div className={styles.pagination}>
				<div className={styles.paginationWrapper}>
					<button
						onClick={() => handlePagination(1)}
						type="button"
						className={classNames(styles.pageItem, styles.active)}
					>
						1
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.pagination}>
			<div className={styles.paginationWrapper}>
				{page !== 1 && (
					<button
						onClick={() => handlePagination(page - 1)}
						type="button"
						className={classNames([styles.pageItem, styles.sides].join(" "))}
					>
						&lt;
					</button>
				)}

				<button
					onClick={() => handlePagination(1)}
					type="button"
					className={classNames(styles.pageItem, {
						[styles.active]: page === 1,
					})}
				>
					{1}
				</button>

				{page > 3 && <div className={styles.separator}>...</div>}

				{page === totalPages && totalPages > 3 && (
					<button
						onClick={() => handlePagination(page - 2)}
						type="button"
						className={styles.pageItem}
					>
						{page - 2}
					</button>
				)}

				{page > 2 && (
					<button
						onClick={() => handlePagination(page - 1)}
						type="button"
						className={styles.pageItem}
					>
						{page - 1}
					</button>
				)}

				{page !== 1 && page !== totalPages && (
					<button
						onClick={() => handlePagination(page)}
						type="button"
						className={[styles.pageItem, styles.active].join(" ")}
					>
						{page}
					</button>
				)}

				{page < totalPages - 1 && (
					<button
						onClick={() => handlePagination(page + 1)}
						type="button"
						className={styles.pageItem}
					>
						{page + 1}
					</button>
				)}

				{page === 1 && totalPages > 3 && (
					<button
						onClick={() => handlePagination(page + 2)}
						type="button"
						className={styles.pageItem}
					>
						{page + 2}
					</button>
				)}

				{page < totalPages - 2 && <div className={styles.separator}>...</div>}

				<button
					onClick={() => handlePagination(totalPages)}
					type="button"
					className={classNames(styles.pageItem, {
						[styles.active]: page === totalPages,
					})}
				>
					{totalPages}
				</button>

				{page !== totalPages && (
					<button
						onClick={() => handlePagination(page + 1)}
						type="button"
						className={[styles.pageItem, styles.sides].join(" ")}
					>
						&gt;
					</button>
				)}
			</div>
		</div>
	)
}

export default Pagination
