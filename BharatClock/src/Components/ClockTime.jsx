function ClockTime() {
    const time=new Date();
    return (
        <div className="flex justify-center">
            <h1>This is current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h1>
        </div>
    )
}
export default ClockTime;