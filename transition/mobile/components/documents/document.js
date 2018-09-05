import React from 'react';
import { View } from 'react-native';
import TextLayer from './text_layer';
// import ImageLayer from './image_layer';

const Document = ({
  action,
  textLayer,
  updateText,
  documentId,
  receiveDocument
}) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      height: '100%',
      width: '100%'
    }}
  >
    <TextLayer
      textLayer={textLayer}
      documentId={documentId}
      receiveDocument={receiveDocument}
      action={action}
      updateText={updateText}
    />
    {/* <View
      style={{
        flex: 1,
        zIndex: action === 'typing' ? -1 : 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}
    >
      <ImageLayer />
    </View> */}
  </View>
);

export default Document;
