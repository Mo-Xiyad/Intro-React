// a react component can be a function returning JSX
import LittleComponent from "./LittleComponent"

const HelloWorld = () => {

    console.log('helloworld component')

    return (
        <>
            {/* this wrapper is called a React fragment */}
            <h1>Hello React World!</h1>
            <h2>Hello!</h2>
            <LittleComponent />
        </>
    )
}

export const strive = 'school'

export default HelloWorld