export const useStore = () => {
    const fromLangStore = useState('from_lang', () => {
        return {
            name: '',
            code: '',
            native_name: ''
        }
    });
    const toLangStore = useState('to_lang', () => []);
    const textStore = useState('text', () => '');
    return {
        fromLangStore,
        toLangStore,
        textStore
    }
};