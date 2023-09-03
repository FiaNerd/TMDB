import { useQuery } from "@tanstack/react-query"
import { getPerson } from "../services/TMDB_API"

const usePersonDetails = (person_id: number) => {
	return useQuery(["person", { id: person_id }], () => getPerson(person_id))
}

export default usePersonDetails
