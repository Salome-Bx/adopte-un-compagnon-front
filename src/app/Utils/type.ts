export type ButtonProps = {
    title: string
    bgColor: string
    border: string
    color: string
    size: string
    hover: string
    padding: string
    margin: string
}



export type CardPetProps = {
    id: number 
    name: string
    birthyear: Date
    gender: string
    quickDescription: string
    getAlongCats: boolean
    getAlongDogs: boolean
    getAlongChildren: boolean
    sos: boolean
    race: string
    image: string 
}

export type ProfilPetProps = {
    id: number 
    name: string
    birthyear: Date
    gender: string
    description: string
    getAlongCats: boolean
    getAlongDogs: boolean
    getAlongChildren: boolean
    entryDate: Date
    sos: boolean
    race: string
    categorisedDog: string
    image: string 
}


export type CardAssoProps = {
    id: number 
    image: string
    nameAsso: string
    address: Date
    city: string
    postalCode: string
    phone: boolean
    siret: boolean
    website: boolean
}