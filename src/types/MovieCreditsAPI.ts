export type Cast = {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string | null
	cast_id: number
	character: string
	credit_id: string
	order: number
}

export type Crew = {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string | null
	credit_id: string
	department: string
	job: string
}

export type Credits = {
	cast: Cast[]
	crew: Crew[]
}

export type MovieDetail = {
	adult: boolean
	backdrop_path: string | null
	belongs_to_collection: Collection
	budget: number
	genres: Genre[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	credits: Credits
}

export type Collection = {
	id: number
	name: string
	poster_path: string
	backdrop_path: string
}

export type Genre = {
	id: number
	name: string
	poster_path: string
	backdrop_path: string
}

export type ProductionCompany = {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

export type ProductionCountry = {
	iso_3166_1: string
	name: string
}

export type SpokenLanguage = {
	english_name: string
	iso_639_1: string
	name: string
}

export type IdOfCast = Omit<Cast, "id">
export type IdOfCrew = Omit<Crew, "id">
export type IdOfMovieDetail = Omit<MovieDetail, "id">
export type IdOfCollection = Omit<Cast, "id">
export type IdOfGenre = Omit<Genre, "id">
export type IdOfProcuctCompany = Omit<ProductionCompany, "id">
