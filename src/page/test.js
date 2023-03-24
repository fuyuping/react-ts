function Test() {
    const handleClick = () => {
        console.log('111')
    }
    
    return <div onClick={handleClick}>
        测试呀
    </div>
}

export default Test;