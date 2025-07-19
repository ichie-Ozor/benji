import { DNA } from 'react-loader-spinner'

function PageLoader() {
    return (
        <div className='grid items-self-center justify-self-center'>
            <DNA
                visible={true}
                height="120"
                width="140"
                ariaLabel='dna-loading'
                wrapperStyle={{}}
                wrapperClass='dna-wrapper'
            />
        </div>
    )
}

export default PageLoader
