import ReactFlow, { Controls } from 'react-flow-renderer';
import { elements } from 'data/nodes';
import { useGetFlowQuery } from 'services/flowApi';
import StepNode from 'components/StepNode';

const nodeTypes = {
  step: StepNode,
};

const FlowMap = () => {
  const { data, isError, isLoading, error } = useGetFlowQuery('/flows');
  return (
    <div style={{ height: '100vh' }}>
      {isLoading ? (
        'Carregando'
      ) : (
        <ReactFlow elements={data} nodeTypes={nodeTypes}>
          <Controls />
        </ReactFlow>
      )}
    </div>
  );
};

export default FlowMap;
