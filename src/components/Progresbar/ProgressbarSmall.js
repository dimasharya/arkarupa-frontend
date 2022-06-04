const ProgressbarSmall = ({progress}) => {
    const Progress = `${progress}%`
    return(
        <>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full" style={{width: Progress}}> {Progress}</div>
  </div>
        </>
    )
}

export default ProgressbarSmall