import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Hjem', href: '#', current: true },
  { name: 'Om meg', href: '#', current: false },
  { name: 'Portefølje', href: '#', current: false },
]

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

const navBtnBase =
  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
const navBtnActive = "bg-gray-950/50 text-white"
const navBtnIdle   = "text-gray-300 hover:bg-white/5 hover:text-white"

export default function StickyNavbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className={classNames(navBtnBase, navBtnIdle, "p-2")}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 data-open:block" />
            </DisclosureButton>
          </div>

          {/* Left side: Logo + Nav links */}
          <div className="flex flex-1 items-center justify-center sm:justify-start sm:items-stretch">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="logo-white.png"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      navBtnBase,
                      item.current ? navBtnActive : navBtnIdle
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Kontakt button */}
          <div className="flex items-center">
            <a
              href="#kontakt"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              Kontakt →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                navBtnBase,
                "w-full justify-start",
                item.current ? navBtnActive : navBtnIdle
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}

          {/* Mobile Kontakt */}
          <DisclosureButton
            as="a"
            href="#kontakt"
            className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          >
            Kontakt →
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}