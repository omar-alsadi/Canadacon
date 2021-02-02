import { useEffect, useState } from 'react';
import getFirebase from './firebase.utilities';

const useFirebase = () => {
    const [instance, setInstance] = useState(null);

    useEffect(() => {
        setInstance(getFirebase());
    }, []);
    return instance;
}

export default useFirebase;