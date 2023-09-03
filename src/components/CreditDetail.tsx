import { Image } from "react-bootstrap"
import { useParams } from "react-router-dom"
import usePersonDetails from "../hooks/usePersonDetails"
import { useEffect, useState } from "react"
import MoviesAvatar from "./MoviesAvatar"

const CreditDetail = () => {
	const [readMore, setReadMore] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640)
	const castId = Number(useParams().creditId)
	const { data: detailsPerson } = usePersonDetails(castId)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640)
			setIsDesktop(window.innerWidth >= 640)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	const handleToggleReadMore = () => {
		setReadMore(!readMore)
	}

	const personName = detailsPerson?.name
	const personBiography = detailsPerson?.biography

	if (!personBiography) {
		return null
	}

	const personGender =
		detailsPerson?.gender === 1
			? "Kvinna"
			: detailsPerson?.gender === 2
			? "Man"
			: detailsPerson?.gender === 3
			? "Binär"
			: "other"

	return (
		<>
			<div className="title-container mb-3">
				<h1 className="title-person">{personName}</h1>
				<div className="info-know-for-wrapper">
					<p className="known-for-text">{detailsPerson.known_for_department}</p>
				</div>
			</div>

			<div className="person-container mb-5">
				<div className="image-container mb-4">
					<Image
						src={`https://image.tmdb.org/t/p/w200${detailsPerson?.profile_path}?language=se-SV&include_image_language=se,null`}
						alt={detailsPerson?.name}
						className="image-person-detail"
					/>
					<div className="person-info-wrapper">
						<h6 className="person-title mb-3">Om {personName}</h6>
						<p className="person-info">Född: {detailsPerson.birthday}</p>
						<p className="person-info"> {detailsPerson.place_of_birth}</p>
						<p className="person-info"> Kön: {personGender}</p>
					</div>
				</div>

				<div className="biography-container mb-5">
					<h6 className="person-title">Biografi</h6>
					<p className="person-info">
						{readMore
							? personBiography
							: isMobile && personBiography.length > 200
							? personBiography.slice(0, 200)
							: isDesktop && personBiography.length > 400
							? personBiography.slice(0, 400)
							: personBiography}
					</p>
					{(isMobile || isDesktop) &&
						personBiography.length > (isMobile ? 200 : 400) && (
							<button
								type="button"
								onClick={handleToggleReadMore}
								className={`btn-read-more ${readMore ? "hide" : ""}`}
							>
								{readMore ? "Visa mindre" : "Läs mer"}
							</button>
						)}
				</div>
			</div>

			<MoviesAvatar />
		</>
	)
}

export default CreditDetail
