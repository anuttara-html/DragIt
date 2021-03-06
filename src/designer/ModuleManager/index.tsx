import { Button } from "@material-ui/core";
import Spacer from "components/common/Spacer";
import DesignerLayout from "designer/Layout";
import React, { Fragment, useState } from "react";
import LeftContent from "./LeftContent";
import intl from "react-intl-universal";
import ModuleContent from "./ModuleContent";
import { useHistory } from "react-router";
import { useLoginCheck } from "base/Hooks/useLoginCheck";
import { useAuthCheck } from "base/Hooks/useAuthCheck";
import { AUTH_CUSTOMIZE } from "APIs/authSlugs";

const ModuleManager = (props:{children?: any})=>{
  const history = useHistory();

  const [selectedModuleId, setSelectedModuleId] = useState(-1);

  useLoginCheck();
  useAuthCheck(AUTH_CUSTOMIZE);

  const handleReturn = ()=>{
    history.goBack();
  }

  return (
    <DesignerLayout
      leftArea={
        <LeftContent onSelect = {moduleId=>setSelectedModuleId(moduleId)}/>
      }
      toolbar = {
        <Fragment>
          <Spacer></Spacer>
          <Button variant="contained" color="primary" onClick={handleReturn} size="large">
            {intl.get('go-back')}
          </Button>          
        </Fragment>
      }      
    >
      {
        selectedModuleId && selectedModuleId > 0 &&
        <ModuleContent moduleId = {selectedModuleId} />        
      }

    </DesignerLayout>
  )
}

export default  ModuleManager