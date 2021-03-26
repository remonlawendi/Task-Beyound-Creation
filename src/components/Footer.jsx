import './Footer.css'
export const Footer = () => {
    return (
        <section className="footer">
  <div class="container">
    <div class="row text-center text-xs-center text-sm-left text-md-left">
      <div class="col-xs-12 col-sm-4 offset-md-1 col-md-3">
        <h5>MENU</h5>
        <ul class="list-unstyled quick-links">
          <li><a href="">New vehicles </a></li>
          <li><a href="">Used vehicles</a></li>
          <li><a href="">Financing</a></li>
          <li><a href="">Parts</a></li>
          <li><a href="">Register your vehicle</a></li>
        </ul>
      </div>

      <div class="col-xs-12 col-sm-4 offset-md-1 col-md-2">
        <h5>FOLLOW US</h5>
        <ul class="list-unstyled quick-links">
          <li><a href=""><i class="fa fa-facebook"></i> Facebook</a></li>
          <li><a href=""><i class="fa fa-twitter"></i>Twitter</a></li>
          <li><a href=""><i class="fa fa-instagram"></i>Instagram</a></li>
          <li><a href=""><i class="fa fa-linkedin"></i>linkedin</a></li>
        </ul>
      </div>

      <div class="col-xs-12 offset-md-1 col-md-4 Email-us">
        <h5>NEWSLETTER</h5>
        <p>Subscribe to our newsletter ro receive our latest news and updates</p>
        <div class="row">
          <input type="text" class="form-control col-md-6 " id="inputPassword" placeholder="Your Email"/>
          <button  href="" target="_blank" class="SubscribeBtn offset-md-1 col-md-5">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}