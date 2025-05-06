"use client"
import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import { CookiesProvider } from 'react-cookie'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<CookiesProvider>
			<main>{children}</main>
								</CookiesProvider>

			
		</div>
	)
}

export default Layout
