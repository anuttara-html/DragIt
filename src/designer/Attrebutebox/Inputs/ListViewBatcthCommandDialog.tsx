import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles, TextField} from '@material-ui/core';
import { InputProps } from './InputProps';
import intl from 'react-intl-universal';
import MetaListDialog from './MetaListDialog';

const styles = (theme: Theme) =>
  createStyles({
    itemInput:{
      margin: theme.spacing(1),
    },

    jumpCheckbox:{
      margin: theme.spacing(-0.2),
    }
    
  });

const useStyles = makeStyles(styles);

export default function ListViewBatcthCommandDialog(props:InputProps){
  const classes = useStyles();
  const {field, value, onChange} = props;
  const [commands, setCommands] = React.useState(value ? JSON.parse(JSON.stringify(value)) : []);
  const [selectedIndex, setSelectedIndex] = React.useState(commands.length > 0 ? 0 : -1);

  const handleChangeAttribute = (index:number, name:string, value:string|boolean)=>{
    commands[selectedIndex][name] = value;
    setCommands([...commands]);
  };


  const handleAddNew = ()=>{
    commands.push({slug:'new-action', label:'New Action', props:{}});
    setSelectedIndex(commands.length - 1);
  };
  
  return (
    <MetaListDialog
      title ={intl.get('action-editor')}
      value = {commands}
      selectedIndex = {selectedIndex}
      onAddNew = {handleAddNew}
      onChange = {newValue=>{setCommands(newValue)}}
      onSave = {()=>{onChange(field, JSON.parse(JSON.stringify(commands)))}}
      onSelected = {index=>{setSelectedIndex(index)}}
    >{selectedIndex >= 0 &&
        <Fragment>
          <TextField 
            className = {classes.itemInput} 
            label={intl.get('slug')}
            variant="outlined" 
            fullWidth
            value = {commands[selectedIndex].slug || ''} 
            onChange = {event=>{
              handleChangeAttribute(selectedIndex, 'slug', event.target.value.trim())
            }}
          />
          <TextField 
            className = {classes.itemInput} 
            label={intl.get('name')} 
            variant="outlined" 
            fullWidth
            value = {commands[selectedIndex].label || ''} 
            onChange = {event=>{
              handleChangeAttribute(selectedIndex, 'label', event.target.value.trim())
            }}
          />
          <TextField 
            className = {classes.itemInput} 
            label={intl.get('action-icon')} 
            variant="outlined" 
            fullWidth
            value = {commands[selectedIndex].icon || ''} 
            onChange = {event=>{
              handleChangeAttribute(selectedIndex, 'icon', event.target.value.trim())
            }}
          />
        </Fragment>
      }
    </MetaListDialog>
    
  )
}