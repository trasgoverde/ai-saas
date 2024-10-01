import React, { useEffect } from 'react';
import Echart2D from './Echart2D';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import fetchNodos2D from '../../../services/Nodos2D';
import { setNodoDetailData2D } from '../../../store/actions/nodeActions2D';

interface Props {
    id_relation: string;
}

const GraphEChart2D: React.FC<Props> = ({ id_relation = "0" }) => {
    const dispatch = useDispatch();
    const nodeDetail2D = useSelector((state: RootState) => state.nodeDetail2D);

    useEffect(() => {
        const getNodesData = async () => {
            if (nodeDetail2D.name == '') {
                const nodosData = await fetchNodos2D(undefined, id_relation);
                if (nodosData !== null && typeof nodosData === 'object') {
                    dispatch(setNodoDetailData2D({
                        id: nodeDetail2D.id || '',
                        name: nodeDetail2D.name || '',
                        data: nodosData,
                    }));
                } else {
                    console.error('Error fetching nodes data');
                }
            }
        };

        getNodesData().catch((error) => console.error(error));
    }, [dispatch, nodeDetail2D, id_relation]);

    const handleMenuItemClick = async (id: string): Promise<void> => {
        try {
            const nodosData = await fetchNodos2D(id, id_relation);
            if (nodosData !== null && typeof nodosData === 'object') {
                dispatch(setNodoDetailData2D({
                    id: nodeDetail2D.id || '',
                    name: nodeDetail2D.name || '',
                    data: nodosData,
                }));
            } else {
                console.error('Error fetching nodes data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRestoreClick = async () => {
        const nodosData = await fetchNodos2D(undefined, id_relation);
        if (nodosData !== null && typeof nodosData === 'object') {
            dispatch(setNodoDetailData2D({
                id: nodeDetail2D.id || '',
                name: nodeDetail2D.name || '',
                data: nodosData,
            }));
        } else {
            console.error('Error fetching nodes data');
        }
    };

    return (
        <div style={{ width: '100%', height: '900px', display: 'flex', justifyContent: 'center' }}>
            <Echart2D nodes={nodeDetail2D} handleMenuItemClick={handleMenuItemClick} handleRestoreClick={handleRestoreClick}/>
        </div>
    );
};

export default GraphEChart2D;
