import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class ListLibrary extends React.Component {

    constructor(props) {
        super(undefined);
        console.log(props.data)
    }

    state = {
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    setLibrarieSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'libraries',
            },
        });
    };

    render() {
        let { sortedInfo } = this.state;
        sortedInfo = sortedInfo || {};

        const columns = [
            {
                title: 'Регион',
                dataIndex: 'territory',
                key: 'territory',
                width: '30%',
                ...this.getColumnSearchProps('territory'),
            },
            {
                title: 'Библиотеки',
                dataIndex: 'libraries',
                key: 'libraries',
                width: '20%',
                sorter: (a, b) => a.libraries - b.libraries,
                sortOrder: sortedInfo.columnKey === 'libraries' && sortedInfo.order,
                ellipsis: true,
            },
        ];

        return (<>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={this.setLibrarieSort}>Сортировка библиотек</Button>
            </Space>
            <Table  onRow={(record, rowIndex) => {
                return {
                    onDoubleClick: () => {history.push('/' + record.order); window.location.reload(true);},
                };
            }}
                     columns={columns} dataSource={this.props.data} onChange={this.handleChange} />
            </>
        );
    }
}

export default ListLibrary;