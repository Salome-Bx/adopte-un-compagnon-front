"use client"
import React, { useState } from 'react'
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { useRouter } from 'next/navigation';


const pageMentions = () => {

    return (

            <div>


            1. Présentation du site.

            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site https://www.adopte-un-compagnon.fr/l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :

            Dénomination ou raison sociale : Adopte un Compagnon

            Siège social : 38000 Grenoble

            Adresse postale : 55 boulevard des montagnes

            Numéro de téléphone : 04 45 23 96 01

            Mail : contact@adopte-un-compagnon.fr

            Siret : 35208155300608

            Responsable de la publication : Mme CHEPAKI

            Hébergement : O2Switch, basé en France.

            Création : Moi même
            2. Conditions générales d’utilisation du site et des services proposés.

            L’utilisation du site https://www.adopte-un-compagnon.fr/ implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site https://www.adopte-un-compagnon.fr/ sont donc invités à les consulter de manière régulière.

            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par la SPA du Dauphiné, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.

            Le site https://www.adopte-un-compagnon.fr/ est mis à jour régulièrement par les bénévoles de la SPA du Dauphiné. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
            3. Description des services fournis.

            Le site https://www.adopte-un-compagnon.fr/ a pour objet de fournir une information concernant l’ensemble des activités de la société.

            La SPA du Dauphiné s’efforce de fournir sur le site https://www.adopte-un-compagnon.fr/ des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.

            Toutes les informations indiquées sur le site https://www.adopte-un-compagnon.fr/ sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site https://www.adopte-un-compagnon.fr/ ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            4. Limitations contractuelles sur les données techniques.

            Le site utilise la technologie JavaScript.

            Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
            5. Propriété intellectuelle et contrefaçons.

            La SPA du Dauphiné est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.

            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de la SPA du Dauphiné.

            Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            6. Limitations de responsabilité.

            La SPA du Dauphiné ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://www.adopte-un-compagnon.fr/ et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.

            La SPA du Dauphiné ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site https://www.adopte-un-compagnon.fr/.
            7. Gestion des données personnelles.

            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.

            A l’occasion de l’utilisation du site https://www.adopte-un-compagnon.fr/, peuvent être recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site https://www.adopte-un-compagnon.fr/, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.

            En tout état de cause la SPA du Dauphiné ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site https://www.adopte-un-compagnon.fr/. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site https://www.adopte-un-compagnon.fr/ l’obligation ou non de fournir ces informations.

            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.

            Aucune information personnelle de l’utilisateur du site https://www.adopte-un-compagnon.fr/ n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de la SPA du Dauphiné et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site https://www.adopte-un-compagnon.fr/.

            Le site n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles. .

            Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
            8. Liens hypertextes et cookies.

            Le site https://www.adopte-un-compagnon.fr/ contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de la SPA du Dauphiné. Cependant, la SPA du Dauphiné n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.

            La navigation sur le site https://www.adopte-un-compagnon.fr/ est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.

            Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :

            Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut à droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.

            Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.

            Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.

            Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. Dans l’onglet « Confidentialité », vous pouvez bloquer les cookies.
            9. Droit applicable et attribution de juridiction.

            Tout litige en relation avec l’utilisation du site https://www.adopte-un-compagnon.fr/ est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            10. Les principales lois concernées.

            Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.

            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
            11. Lexique.

            Utilisateur : Internaute se connectant, utilisant le site susnommé.

            Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            12. Informatique et liberté

            Conformément à la législation française « Informatique et Libertés », toute personne citée dans ce service bénéficie d’un « droit d’accès et de rectification » pour les informations la concernant



            </div>
    )

}

export default pageMentions