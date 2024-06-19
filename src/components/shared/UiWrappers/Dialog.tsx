import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const CustomPopover = ({ trigger, children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent style={{
        backgroundColor: 'rgb(42, 41, 57)', // Popup background color
        border: '1px solid rgba(255, 255, 255, 0.09)', // Border with rgba white at 9% opacity
        borderRadius: '8px', // Rounded corners
        padding: '16px', // Padding inside the popover
        color: 'white', // Text color inside the popover
      }}>
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;