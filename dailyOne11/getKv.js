let list =  [
    {
      label: '手机',
      value: 1,
      children: [
        {
          label: '小米系列',
          value: 10,
          children: [
            {
              label: '小米 Civi 1S',
              value: 100
            },
            {
              label: '小米 Civi 11S',
              value: 101
            }
          ]
        },
        {
          label: '黑鲨',
          value: 11,
          children: [
            {
              label: '黑鲨 Civi 1S',
              value: 110
            },
            {
              label: '黑鲨 Civi 11S',
              value: 111
            }
          ]
        }
      ]
    },
    {
      label: '电视',
      value: 2,
      children: [
        {
          label: '小米电视',
          value: 20,
          children: [
            {
              label: '电视 Civi 1S',
              value: 200
            },
            {
              label: '电视 Civi 11S',
              value: 201
            }
          ]
        },
        {
          label: 'redmi电视',
          value: 21,
          children: [
            {
              label: 'redmi电视 Civi 1S',
              value: 210
            },
            {
              label: 'redmi电视 Civi 11S',
              value: 211
            }
          ]
        }
      ]
    }
  ]

  // 取label 和value  格式:手机/小米系列/小米 Civi 1S
var dfs = function (list) {
    let res = []
    let dfs = function (list, label,value) {
        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            let newLabel = label ? label + '/' + item.label : item.label
            let newValue = value ? value + '/' + item.value : item.value
            if (item.children) {
                dfs(item.children, newLabel,newValue)
            } else {
                res.push({
                    label: newLabel,
                    value: newValue
                })
            }
        }
    }
    dfs(list, '','')
    return res
}
console.log(dfs(list))
