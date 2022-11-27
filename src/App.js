
import './App.css';


function App() {

  const free = { name: "free", price: 0, features: [{ status: "enabled", feature: "Single User" }, { status: "enabled", feature: "5GB Storage" }, { status: "enabled", status: "enabled", feature: "Unlimited Public Projects" }, { status: "enabled", feature: "Community Access" }, { status: "disabled", feature: "Unlimited Private Projects" }, { status: "disabled", feature: "Dedicated Phone Support" }, { status: "disabled", feature: "Free Subdomain" }, { status: "disabled", feature: "Monthly Status Reports" }] };
  const plus = { name: "plus", price: 9, features: [{ status: "enabled", feature: "5 Users" }, { status: "enabled", feature: "5GB Storage" }, { status: "enabled", status: "enabled", feature: "Unlimited Public Projects" }, { status: "enabled", feature: "Community Access" }, { status: "enabled", feature: "Unlimited Private Projects" }, { status: "enabled", feature: "Dedicated Phone Support" }, { status: "enabled", feature: "Free Subdomain" }, { status: "disabled", feature: "Monthly Status Reports" }] };
  const pro = { name: "pro", price: 49, features: [{ status: "enabled", feature: "Unlimited Users" }, { status: "enabled", feature: "5GB Storage" }, { status: "enabled", status: "enabled", feature: "Unlimited Public Projects" }, { status: "enabled", feature: "Community Access" }, { status: "enabled", feature: "Unlimited Private Projects" }, { status: "enabled", feature: "Dedicated Phone Support" }, { status: "enabled", feature: "Unlimited Free Subdomains" }, { status: "enabled", feature: "Monthly Status Reports" }] };;
  const cards = [free, plus, pro];

  return (
    <div className="price-cards-wrapper">
      {cards.map((variant, index) => (<Card key={index} variant={variant} />))}
    </div>
  );
}

function Card({ variant, index }) {
  // console.log(variant);
  let { name, price, features } = variant;

  return (
    <div key={index} className="card">
      <div className="price-w">
        <h3 className="variant">{name}</h3>
        <p className='price-value'> &#8377; {price} <span>/month</span></p>
      </div>
      <div className="options">
        {features.map((fobj, index) => (<Feature key={index} status={fobj.status} option_name={fobj.feature} />))}
      </div>
      <button className='button-variant'>BUTTON</button>
    </div>

  );

}

function Feature({ status, option_name, index }) {

  const image_url = (status === "enabled") ? ("./check.png") : ("./close.png");
  const disabled_image_style = { filter: "opacity(0.4)" };
  const disabled_text_style = { color: "grey" };
  const option_image_style = (status === "disabled") ? disabled_image_style : null;
  const option_text_style = (status === "disabled") ? disabled_text_style : null;

  // console.log(status, option_name);

  const renderFeatureName = () => {
    switch (option_name) {
      case "5 Users":
      case "Unlimited Users":
        return <p style={{ ...option_text_style, fontWeight: "bold" }} className='option-name'>{option_name}</p>
      case "Unlimited Free Subdomains":
        return <p style={option_text_style} className='option-name'>
          <b>Unlimited</b> Free Subdomains
        </p>
      default:
        return <p style={option_text_style} className='option-name'>{option_name}</p>
    }
  }

  return (
    <div key={index} className="option-wrapper">
      <img style={option_image_style} className='option-image' src={image_url} alt="" />
      {renderFeatureName()}
      {/* <p style={option_text_style} className='option-name'>{option_name}</p> */}
    </div>
  );
}

export default App;
