
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Choice extends Component {

  render() {
    const menuItems = this.props.options.map((option) =>
      <MenuItem key={option.id} value={option.id} primaryText={option.name} />
    );
    return (
      <div>
        <SelectField
          floatingLabelText={this.props.label}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {menuItems}
        </SelectField>
      </div>
    );
  }
}

export default Choice;
