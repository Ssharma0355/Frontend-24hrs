import Counter from "./Counter";
// 1st we import component
import { render } from "@testing-library/react"; // Add this import

describe(Counter,()=>{
   it("counter displays correct initial count",()=>{
    const{getByTestId}= render(<Counter intialcount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0)
   });
   it("")

})