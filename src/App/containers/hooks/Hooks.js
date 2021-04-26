import HookCounter from '../../components/hooks/hookCounter';
import HookForm from '../../components/hooks/hookForm';
import HookTitle from '../../components/hooks/hookTitle';
import HookComponentWillUnmount from '../../components/hooks/hookComponentWillUnmount';
import HookDataFetchInitially from '../../components/hooks/hookDataFetchInitially';
import HookDataFetchOnButtonClick from '../../components/hooks/hookDataFetchOnButtonClick';
import HookDataFetchUsingReducer from'../../components/hooks/hookDataFetchUsingReducer';

export default function HooksContainer() {
	return (
		<div>
			<h1>Hooks</h1>
			<hr/>
			<HookCounter />
			<hr/>
			<HookForm />
			<hr/>
			<HookTitle />
			<hr/>
			<HookComponentWillUnmount />
			<hr />
			<HookDataFetchInitially />
			<hr />
			<HookDataFetchOnButtonClick />
			<hr />
			<HookDataFetchUsingReducer />
			<hr />
		</div>
	)
} 