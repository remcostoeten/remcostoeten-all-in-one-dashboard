import CurrentTime from './navigation/CurrentTime'
import Breadcrumbs from './navigation/Breadcrumbs'
import DisplayCity from './navigation/DisplayCity'
import CustomPopover from './UiWrappers/Dialog'
import { Button } from '../ui/button'

export default function TopNav() {
    return (
        <div className='flex w-full items-center justify-between whitespace-nowrap flex-1 h-top-bar px-4 pr-8 py-1'>
            <Breadcrumbs />
            <div className='flex gap-6 items-center justify-end'>
                {/* <TopNavSettings /> */}
                {/* <LocaleSwitcher /> */}
                {/* <CommandPalette/>  */}
                  <CustomPopover trigger={<Button>Open Popover</Button>}>
        <p>This is the popover content.</p>
      </CustomPopover>
                  <DisplayCity />
                <CurrentTime />
            </div>
        </div>
    )
}
