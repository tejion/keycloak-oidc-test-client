import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {useRecoilState} from 'recoil';
import {authTestRequestAtom, keycloakStateAtom} from '../../state/atoms';



const RouteLogger = () => {
    const location = useLocation();
const [keycloakState, setKeycloakState] = useRecoilState(keycloakStateAtom);
    

    useEffect(() => {
        console.log('Route changed:', location.pathname);
        console.log(Object.keys(keycloakState));
    }, [location]);

    return null; // This component doesn't render anything, it's just for logging
};

export default RouteLogger;