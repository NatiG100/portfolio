import { useCallback, useEffect, useState } from "react";

const useScroll = ({ref=null,amount=100})=>{
    const [start,setStart] = useState(false);
    const [end,setEnd] = useState(false);
    const updateSliderState=useCallback(()=>{
        if(Math.round(ref.current.scrollLeft)!==ref.current.scrollWidth-ref.current.clientWidth&&ref.current.scrollLeft===0){
            setStart(true);
            setEnd(false);
        }else if(Math.round(ref.current.scrollLeft)===ref.current.scrollWidth-ref.current.clientWidth&&ref.current.scrollLeft!==0){
            setEnd(true);
            setStart(false);
        }else if(Math.round(ref.current.scrollLeft)===ref.current.scrollWidth-ref.current.clientWidth&&ref.current.scrollLeft===0){
            setEnd(true);
            setStart(true);
        }else{
            setEnd(false);
            setStart(false);
        }
    },[ref]);
    
    const listenForScrollChange = useCallback(()=>{
        updateSliderState();
    },[updateSliderState])
    useEffect(()=>{
        ref.current.addEventListener('scroll',listenForScrollChange);
        window.addEventListener('resize',listenForScrollChange);
        updateSliderState();
    },[updateSliderState,listenForScrollChange,ref])
    function moveRight(){
        ref.current.scrollLeft -= amount;
        updateSliderState();
    }
    function moveLeft(){
        ref.current.scrollLeft += amount;
        updateSliderState();
    }
    return{
        start,
        end,
        moveLeft,
        moveRight,
    }
}
export default useScroll;