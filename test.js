//封装方法，作用用来复制数组或对象
//source代表被复制的对象或数组,target是接受复制数据的对象或数组
function extend(source,target){
        for (var key in source) {
            var value = source[key];
            target[key] = value;
        }
    }
