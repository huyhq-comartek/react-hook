/** Memo */
// Ghi nho Component, ko phai render lai khi Component cha goi toi
/**
 * Nguyen ly hoat dong
 * - Memo kiem tra xem cac props co thay doi state hay khong 
 * - Kiem tra bang ===
 * - Neu khong co 1 prop nao thay doi thi Component se khong dc render lai
 */

/** useCallback */
// -Voi truong hop Component co mot prop kieu function hoac object truyền lại
// từ Component cha thì mỗi lần Component cha render thì tham chiếu của function
// hoặc object sẽ bị thay đổi, do vậy memo sẽ ko thể hoạt động đúng do phép so
// sánh === không có tác dụng
// - Khi này sử dụng useCallBack sẽ giúp xử lí vấn đề này

import './Memo.scss'
import { memo } from 'react'

function Memo({onIncrease}) {

    console.log('re-render');

    return (
        <button onClick={onIncrease}>Render</button>
    )
}

export default memo(Memo);

