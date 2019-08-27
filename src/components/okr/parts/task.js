import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateState, moveTaskTo } from '../../../store/okr.actions';

function mapStateToProps(state) {
	return {
    currentlyDraggin: state.okr.draggin
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    updateState,
    moveTaskTo
	}, dispatch);
}

class OkrTask extends React.Component {
  
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
  }

  render() {
    const disabled = this.props.disabled;
    let currentValue = { ...this.props.task };
  
    const changed = (val = {}) => {

      currentValue = {
        ...currentValue,
        ...val
      };

      this.props.onChange && this.props.onChange(currentValue);
    }

    const onKeyUp = (evt) => {
      if (["Escape"].indexOf(evt.key) > -1) { // enter, escape
        changed({ disabled: true });
      }

      if (["Enter"].indexOf(evt.key) > -1) { // enter, escape
        changed({ disabled: !disabled });
      }
    }

    const onDoupleClick = (evt) => {
      const elm = evt.currentTarget;
      changed({ disabled: false });
      setTimeout(() => {
        elm.focus();
      }, 50);
    }

    const waste = () => {
      if(window.confirm("Are you sure?")) {
        this.props.onWaste(this.props.task.id)
      }
    }

    let className = 'okr-task';
    if (currentValue.status === 1) {
      className += ' okr-task--done';
    }

    if (!disabled) {
      className += ' okr-task--active';
    }

    return (
      <div className={className} ref={this.domRef} >
        <div className="okr-task__dragger">
          <span className="okr-task__type" aria-label="cat" role="img">T</span>
            <input
              type="text"
              onDoubleClick={onDoupleClick}
              readOnly={disabled}
              onBlur={evt => changed({ disabled: true })}
              onKeyDown={onKeyUp}
              placeholder="Something to do..."
              defaultValue={currentValue.title}
              onChange={evt => changed({ title: evt.target.value })} />
            <input
              type="checkbox"
              defaultChecked={currentValue.status === 1}
              onChange={evt => changed({ status: evt.target.checked ? 1 : 0 })}
              />
            <span className="okr-task__deletebtn" onClick={waste}>&#x1F5D1;</span>
        </div>
      </div>
    )
  }
}

export default connect(() => mapStateToProps, mapDispatchToProps)(OkrTask);