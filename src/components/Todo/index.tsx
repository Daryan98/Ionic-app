import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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
	loadTodos(): void
}

type Props = StateProps & DispatchProps;

class TodoApp extends React.Component<Props> {
	state = { inputValue: '' }

	componentDidMount() {
		const { loadTodos } = this.props;
	}

	onChangeInput(e: any){
		this.setState({inputValue: e.target.value});
	}
	render() {
		const { todos } = this.props;
		console.log(todos);
		return (<>
			<IonHeader>
				<Header className="header">
					<IonInput class="input" placeholder="Enter an activity..." onIonChange={(e: Event) => this.onChangeInput(e)} ></IonInput>
					<IonFab vertical="center"  horizontal="end" slot="fixed" >
						<IonFabButton class="fab_button">
							<AddIcon className="plus_icon"/>
						</IonFabButton>
				</IonFab>
				</Header>
			</IonHeader>

			<IonContent>
				<Todos>
					<div className="todoos do">
						<p>You have nothing to-do!</p>

						<ul className="todo_list do">
							<li>
								Do Some
								<div className="icons">
									<div className="trash icon">
										<TrashIcon className="trash"/>
									</div>
									<div className="checkmark icon">
										<CheckMarkIcon className="checkmark"/>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<Divider />
					<div className="todoos done">
					<p>You have yet to compelete any tasks.</p>

					<ul className="todo_list done">
						<li>
								Do Some
								<div className="icons">
									<div className="trash icon">
										<TrashIcon className="trash"/>										
									</div>
									<div className="checkmark icon">
										<CheckMarkIcon className="checkmark"/>
									</div>
								</div>
							</li>
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

const mapDispatchToProps = ( dispatch: Dispatch ) =>
	bindActionCreators(TodosActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);