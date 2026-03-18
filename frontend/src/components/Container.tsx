import type {ReactNode} from 'react'

type ContainerProps = {
    children: ReactNode
}


export default function Container({children}:ContainerProps){
	return(
		<div className="max-w-8xl mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-10 py-3">
			{children}
		</div>
	)
}