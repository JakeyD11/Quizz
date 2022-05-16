const QuestionItem = props => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (props.submittedValue) {
            setValue(props.submittedValue);
        }
    }, []);

    function handleChangeValue(val) {
        setValue(val);
    }

    return (
        <div>
            <div>Q: {props.content}</div>
            {props.answers.map((answer, i) => {
                return (
                    <li>
                        <input
                            type='radio'
                            name={props._id}
                            value={value}
                            onChange={handleChangeValue.bind(null, i)}
                        />
                        <p>{answer}</p>
                    </li>
                );
            })}
            <div>
                <button>prev</button>
                <button>next</button>
            </div>
        </div>
    );
};

export default QuestionItem;