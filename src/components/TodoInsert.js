import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md'
import '../scss/Todo.scss'

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
       setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(e => {
        if (value) {
            onInsert(value);
            setValue('');
        }

        // submit 새로고침 방지
        e.preventDefault()
    },
    [onInsert, value])
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요' value={value} onChange={onChange}/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;