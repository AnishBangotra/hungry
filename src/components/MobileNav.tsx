import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { CircleUserRound, Menu } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLinks from './MobileNavLinks'

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user} = useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-white' />
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                {isAuthenticated ? (
                    <span className='flex item-center font-bold gap-2'>
                        <CircleUserRound className='text-white' />
                        {user?.email}
                    </span>
                ) : (
                    <span> Welcome to Hungry</span>
                )}
            </SheetTitle>
            <Separator />
            <SheetDescription className='flex flex-col gap-4'>
                {isAuthenticated ? <MobileNavLinks /> : (
                <Button onClick={() => loginWithRedirect()} className='flex-1 font-bold bg-blue-500'>
                   Log In
                </Button>
                )}
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav