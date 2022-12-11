import { useEffect, useMemo, useState } from "react"

const useIsInviewPort = (ref)=>{
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        ()=> new IntersectionObserver(([entry])=>setIsIntersecting(entry.isIntersecting))
        ,[]
    );

    useEffect(()=>{
        if(ref){
            observer.observe(ref.current);
            return ()=>observer.disconnect
        }
    },[ref,observer]);

    return isIntersecting;
}
export default useIsInviewPort;