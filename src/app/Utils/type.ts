import { MouseEventHandler } from "react"

export type ButtonStateProps = {
    title: string
    bgColor: string
    border: string
    color: string
    size: string
    hover: string
    padding: string
    margin: string
    state: string
}


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
    map(arg0: (pet: CardPetProps) => import("react").JSX.Element): import("react").ReactNode
    id: number 
    name: string
    birthyear: number | string | Date;
    gender: string
    quickDescription: string
    getAlongCats: boolean
    getAlongDogs: boolean
    getAlongChildren: boolean
    sos: boolean
    race: string
    image: string 
    asso: {
        postalCode:string
    },
    species: {
        name:string
    }
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
    nameAsso : string
    address :string
    city: string
    postalCode : string
    phone : string
    website : string
    asso: any
}

export type EditProfilPetProps = {
    map(arg0: (pet: EditProfilPetProps) => import("react").JSX.Element): import("react").ReactNode
    id: number 
    name: string
    birthyear: string
    gender: string
    quickDescription: string
    description: string
    getAlongCats: boolean
    getAlongDogs: boolean
    getAlongChildren: boolean
    entryDate: string
    sos: boolean
    race: string
    isCategorized: string
    categorisedDog: string
    image: string 
    species: string
    nameAsso : string
    address :string
    city: string
    postalCode : string
    phone : string
    website : string
    asso: any
}

export type CardAssoProps = {
    id: number 
    image: string
    nameAsso: string
    address: string
    city: string
    postalCode: string
    phone: string
    website: string
    roles : string
    asso: any
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

export type RegisterAssoProps = {
    id: number 
    image: string
    nameAsso: string
    email:string
    firstname: string
    lastname: string
    address: string
    city: string
    postalCode: string
    phone: string
    siret: string
    website: string
    password: string
    passwordConfirm: string
}

export type AdoptionFormProps = {
    
    map(arg0: (form: AdoptionFormProps) => import("react").JSX.Element): import("react").ReactNode
    formList: any
    map(arg0: (form: AdoptionFormProps) => import("react").JSX.Element): import("react").ReactNode
    form: any
    id : number
    name: string,
    dateForm : string
    lastname : string,
    firstname : string,
    email : string,
    postalCode : string,
    phone : string,
    message : string,
    pet_id : number
}