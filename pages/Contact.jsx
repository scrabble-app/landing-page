export default function Contact(){
    return(
        <div className="container-contact">
            <div className="formulaire">
                <h3>Nous contacter</h3>
                <form className="Form">
                    <label>Nom</label>
                    <input type="text" name="Nom" placeholder="Nom"></input>
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email"></input>
                    <label>Message</label>
                    <input type="text" name="Message" placeholder="Entrer un message"></input>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <div className="coordonnee">
                <h3>Coordonnées des développeurs</h3>
                <div className="liens">
                    <a href="arskabinda@gmail.com">arskabinda@gmail.com</a>
                    <a href="paskasonga@gmail.com">paskasonga@gmail.com</a>
                    <a href="kevanimakasa2019@gmail.com">kevanimakasa2019@gmail.com</a>
                </div>
            </div>
        </div>
    )
}