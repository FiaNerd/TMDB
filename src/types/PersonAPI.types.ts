export type Person = {
	adult: boolean
	also_known_as: string[]
	biography: string
	birthday: string
	deathday: string | null
	gender: number
	homepage: string | null
	id: number
	imdb_id: string
	known_for_department: string
	name: string
	place_of_birth: string
	popularity: string
	profile_path: string | null
	movie_credits: Movie_Credits
}

export type Cast = {
	adult: false
	backdrop_path: string | null
	genre_ids: [number]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	character: string
	credit_id: string
	order: 0
}

export type Movie_Credits = {
	cast: Cast[]
}

export type IdOfPerson = Omit<Person, "id">
export type IdOfCast = Omit<Cast, "id">
