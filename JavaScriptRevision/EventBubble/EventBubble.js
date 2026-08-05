const grandparent = () => {};
const parent = () => {};
const child = () => {};
<div onClick={grandparent()}>
  <div onClick={parent()}>
    <div onClick={child()}>

    </div>
  </div>
</div>;
// In Event Bubble  
// when we click on Child() it will run Child then Parent then GrandParent (Down to Up)

// In Event Tricking 
// When we Click on Child() it will Run GrandParent then Parent then Child()(Up to Down)