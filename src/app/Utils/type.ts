export type ButtonActionProps = {
    title: string
    bgColor: string
    border: string
    color: string
    size: string
    hover: string
    padding: string
    margin: string
    action: string
}

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
    species: string
    asso : string
    address :string
    city: string
    postalCode : string
    phone : string
    website : string
    
}


export type CardAssoProps = {
    id: number 
    image: string
    nameAsso: string
    address: Date
    city: string
    postalCode: string
    phone: string
    siret: string
    website: string

}

export type ProfilAssoProps = {
    id: number 
    image: string
    nameAsso: string
    email: string
    firstname: string
    lastname: string
    address: string
    city: string
    postalCode: string
    phone: string
    siret: string
    website: string
}

export type AdoptionForm = {
    
    lastname : string,
    firstname : string,
    email : string,
    postalCode : string,
    phone : string,
    message : string,
    pet_id : number
}