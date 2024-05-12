import "./footer.css"

function FOOTER(){
    return(
        <>
<footer className=" text-center mt-2 bg-warning  "style={{zIndex:"1"}} >
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a data-mdb-ripple-init className="btn btn1 text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Twitter */}
      <a data-mdb-ripple-init className="btn btn1 text-white btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
      {/* Google */}
      <a data-mdb-ripple-init className="btn btn1 text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a>
      {/* Instagram */}
      <a data-mdb-ripple-init className="btn btn1 text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
      {/* Linkedin */}
      <a data-mdb-ripple-init className="btn btn1 text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      {/* Github */}
      <a data-mdb-ripple-color="danger" className="btn btn1 text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!" role="button"><i className="fab fa-github" /></a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3 text-light" style={{backgroundColor: 'black'}}>
    © 2020 Copyright :
    <span className=" text-light" > NEBULA Corp.</span>
  </div>
  {/* Copyright */}
</footer>


        </>
    )
}
export {FOOTER}