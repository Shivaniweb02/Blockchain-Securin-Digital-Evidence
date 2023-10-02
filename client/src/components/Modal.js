import { useEffect } from "react";
import "./Modal.css";
// const input = document.getElementById('text-input');
// const outputContainer = document.getElementById('output-container');

// input.addEventListener('input', function() {
//   const inputValue = input.value;
//   outputContainer.innerHTML = `You entered: ${inputValue}`;
// });





const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">SHARE EVIDENCE &#128272;</div>
          <div className="body">
          {/* <div class="input-container">
  <input type="text" className="address" placeholder="Enter Address"></input>
  <label>Enter your Address here</label>
  <span></span>
</div> */}
<div class="input-container">
  <input type="text" id="text-input" className="address" placeholder=" "></input>
  <label for="text-input">Enter your input</label>
  <div class="underline"></div>
</div>

<p id="output-container"  ></p>

<p id="input-value"></p>

          </div>
          <form id="myForm">
          {/* <select id="selectNumber">
              <option className="address">People With Access</option>
            </select> */}
            <div class="select-container">
  <select>
    <option className="address" selected disabled>People who have access</option>
  </select>
</div>
<p>Lawyer :0xbDA5747bFD65F08deb54cb465eB87D40e51B197E</p>
<p>Police :0x70997970C51812dc3A010C7d01b50e0d17dc79C8</p>
<p>Invest. :0x2546BcD3c84621e976D8185a91A922aE77ECEc30</p>
<p> FBI: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097</p>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
