export type Genrer = {
	id: number
	name: string
}

export type IdOfGenrer = Omit<Genrer, "id">

export type Genrers = Genrer[]

export type GenrerResults = {
	genres: Genrer[]
}
