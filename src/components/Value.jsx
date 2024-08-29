import Map from "../images/Map.png";
import walletIcon from "../images/icon-wallet.svg";
import supportIcon from "../images/icon-support.svg";
import userIcon from "../images/icon-user.svg";
import messageIcon from "../images/icon-messages.svg";
function Value() {
  return (
    <div className="container bg__grey">
      <div className="container__main">
        <div className="value">
          <div className="value__image">
            <img src={Map} alt="" />
          </div>
          <div className="value__text">
            <h6 className="heading--h6">Why choose us</h6>
            <h3 className="heading--h3">
              We offer the best experience with our rental deals
            </h3>
            <div className="value__box">
              <div className="value__box--item">
                <div className="value__box--icon">
                  <img src={walletIcon} alt="" />
                </div>
                <div className="value__box--detail">
                  <p className="p__lg--normal">Best price guaranteed</p>
                  <p className="p__sm--light">
                    Find a lower price? We&apos;ll refund you 100% of the
                    difference
                  </p>
                </div>
              </div>
              <div className="value__box--item">
                <div className="value__box--icon">
                  <img src={userIcon} alt="" />
                </div>
                <div className="value__box--detail">
                  <p className="p__lg--normal">Experience driver</p>
                  <p className="p__sm--light">
                    Don&apos;t have a driver? Don&apos;t worry, we have many
                    experienced driver for you.
                  </p>
                </div>
              </div>
              <div className="value__box--item">
                <div className="value__box--icon">
                  <img src={supportIcon} alt="" />
                </div>
                <div className="value__box--detail">
                  <p className="p__lg--normal">24-hour car delivery</p>
                  <p className="p__sm--light">
                    Book your car anytime and we will deliver it directly to
                    you.
                  </p>
                </div>
              </div>
              <div className="value__box--item">
                <div className="value__box--icon">
                  <img src={messageIcon} alt="" />
                </div>
                <div className="value__box--detail">
                  <p className="p__lg--normal">24/7 technical support</p>
                  <p className="p__sm--light">
                    Have a question? Contact Carentall support anytime when you
                    have problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Value;
