
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Choice extends Component {

  render() {
    const menuItems = this.props.options.map((option) =>
      <MenuItem
        key={option.optionId}
        value={option.optionId}
        primaryText={option.optionName}
        // secondaryText={option.optionDescription}
      />
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
