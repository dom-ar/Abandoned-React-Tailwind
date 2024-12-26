import Navbar from "../components/Navbar"
import Button from "../components/ui/Button";
import { IoIosMenu, IoIosClose, IoIosArrowDown } from "react-icons/io";

export default function About() {

  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-4 items-center">
        <h1 className="text-6xl mb-4">Button</h1>
        <Button>Default</Button>
      </div> 
      <div className="gap-4 flex ml-4 mt-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="light">Light</Button>
        <Button variant="blank">Blank</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
      </div>
      <p className="ml-4">By default Link has an underline on hover, while others do not</p>
        
      <div className="gap-4 flex ml-4 mt-8">
        <Button variant="outline" rounded="pill">Pill---------</Button>
        <Button variant="outline" rounded="md">Rounded</Button>
      </div>

      <div className="gap-4 flex ml-4 mt-8">
        <Button variant="outline" size="default">Default Size</Button>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline" size="lg">Large</Button>
        <Button variant="outline" size="icon">Icon</Button>
      </div>

      <div className="gap-4 flex ml-4 mt-8">
        <Button variant="outline" hover="none">Hover None</Button>
        <Button variant="outline" hover="accent">Hover Accent</Button>
        <Button variant="outline" hover="ring">Hover Ring</Button>
        <Button variant="outline" hover="opacity">Hover Opacity</Button>
      </div>
    </>
  );
}