import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TrashIcon from 'react-ionicons/lib/MdTrash';
import CheckMarkIcon from 'react-ionicons/lib/MdCheckmark';
import AddIcon from 'react-ionicons/lib/MdAdd';
import { Header, Todos, Divider } from './styles';
import {
	IonInput,
	IonContent,
	IonHeader,
	IonFab, 
	IonFabButton
} from '@ionic/react'
import { Todo } from "../../store/ducks/todos/types";
import * as TodosActions from "../../store/ducks/todos/actions";

import { ApplicationState } from "../../store";


interface StateProps {
	todos: Todo[]
}

interface DispatchProps {
	loadTodoAction(): void
	addTodoAction(name: String): void

}

type Props = StateProps & DispatchProps;

interface State {
	inputValue?: String;
}

class TodoApp extends React.Component<Props, State> {
	state = { inputValue: '' }

	componentDidMount() {
		const { loadTodoAction } = this.props;
		loadTodoAction();
	}

	addTodoHandle(){
		const { inputValue } = this.state;
		const { addTodoAction } = this.props;
		if(inputValue !== '') {
			addTodoAction(inputValue);
		}
	}

	onChangeInput(e: any){
		this.setState({inputValue: e.target.value});
	}
	render() {
		const { todos } = this.props;
		const doneItems = todos.filter(item => item.status == 'done');
		return (<>
			<IonHeader>
				<Header className="header">
					<IonInput class="input" placeholder="Enter an activity..." onIonChange={(e: Event) => this.onChangeInput(e)} ></IonInput>
					<IonFab vertical="center"  horizontal="end" slot="fixed" >
						<IonFabButton class="fab_button" onClick={() => this.addTodoHandle()}>
							<AddIcon className="plus_icon"/>
						</IonFabButton>
				</IonFab>
				</Header>
			</IonHeader>

			<IonContent>
				<Todos>
					<div className="todoos do">
						{
							todos.length <= 0 && <p>You have nothing to-do!</p>
						}
						

						<ul className="todo_list do">
							{
								todos.map(item => {
									if(item.status == 'do'){
										return(
											<li>
											{item.text}
											<div className="icons">
												<div className="trash icon">
													<TrashIcon className="trash"/>
												</div>
												<div className="checkmark icon">
													<CheckMarkIcon className="checkmark"/>
												</div>
											</div>
										</li>
										)
									}
								})
							}
						</ul>
					</div>
					<Divider />
					<div className="todoos done">
					{
						!doneItems.length &&
						<p>You have yet to compelete any tasks.</p>
					}

					<ul className="todo_list done">
						{
							todos.map(item => {
								if(item.status == 'done'){
									return(
										<li>
										{item.text}
										<div className="icons">
											<div className="trash icon">
												<TrashIcon className="trash"/>										
											</div>
											<div className="checkmark icon">
												<CheckMarkIcon className="checkmark"/>
											</div>
										</div>
									</li>
									)
								}
							})
						}
						</ul>
					</div>
				</Todos>
			</IonContent>
		</>)
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	todos: state.todos.data,
})

const mapDispatchToProps = ( dispatch: Dispatch ) => {
	return {
		addTodoAction: (name: String) => dispatch(TodosActions.addTodo([{id: Math.random(), status: 'do', text:name}])),
    loadTodoAction: () => dispatch(TodosActions.loadTodos()), 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);