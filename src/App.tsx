import React, { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

interface CardData {
  name: string;
  englishName: string;
  title: string;
  company: string;
  department: string;
  office: string;
  phone1: string;
  phone2: string;
  email: string;
  website: string;
  websiteUrl: string;
  address: string;
  addressEn: string;
  imageUrl: string;
}

type CardDataField = keyof CardData;

const App: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showFormatMenu, setShowFormatMenu] = useState<boolean>(false);

  const [cardData, setCardData] = useState<CardData>({
    name: '劉名政',
    englishName: 'Foy',
    title: 'Engineer',
    company: 'Industrial Safety And Health Association (ISHA) Of The R.O.C',
    department: 'Safety And Environmental Technology Department',
    office: 'Kaohsiung Office',
    phone1: '+886-7-5503115 ext.28',
    phone2: '+886-955-787-053',
    email: 'foylaou0326@mail.isha.org.tw',
    website: 'www.isha.org.tw',
    websiteUrl: 'https://www.isha.org.tw/',
    address: '813707 高雄市左營區博愛三路12號15樓',
    addressEn: '15F., No.12. Bo`ai 3rd Road., Zuoying Dist., Kaohsiung City 813707, Taiwan (R.O.C.)',
    imageUrl: 'https://i.imgur.com/wEXUjzU.png'
  });

  const handleChange = (field: CardDataField, value: string): void => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const generateFullHTML = (): string => {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; border-collapse: collapse; max-width: 650px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
  <tr>
    <td style="padding: 30px 25px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="width: 140px; text-align: center; vertical-align: top;">
            <img src="${cardData.imageUrl}" alt="${cardData.name}" width="120" height="120" style="border-radius: 50%; border: 4px solid #e3f2fd; box-shadow: 0 6px 20px rgba(0,0,0,0.15); display: block; margin: 0 auto;">
          </td>
          <td style="width: 30px;"></td>
          <td style="vertical-align: top;">
            <h2 style="font-size: 24px; font-weight: 700; margin: 0 0 8px 0; color: #2c3e50;">${cardData.name} <span style="color: #3498db;">${cardData.englishName}</span></h2>
            <p style="font-size: 16px; font-weight: 600; margin: 0 0 6px 0; color: #34495e;">${cardData.title}</p>
            <p style="font-size: 15px; font-weight: 500; margin: 0 0 4px 0; color: #2980b9;">${cardData.company}</p>
            <p style="font-size: 14px; margin: 0; color: #7f8c8d;">${cardData.department} | <span style="color: #e74c3c;">${cardData.office}</span></p>
          </td>
        </tr>
      </table>
      <div style="height: 2px; background: linear-gradient(90deg, #3498db 0%, #2ecc71 50%, #e74c3c 100%); margin: 25px 0;"></div>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="width: 35px; padding: 8px 0; text-align: center;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); border-radius: 50%; line-height: 28px; text-align: center;">📞</span>
          </td>
          <td style="padding: 8px 0 8px 12px;">
            <a href="tel:${cardData.phone1.replace(/\s/g, '')}" style="color: #2c3e50; text-decoration: none;">${cardData.phone1}</a> <span style="color: #95a5a6;">|</span> <a href="tel:${cardData.phone2.replace(/\s/g, '')}" style="color: #2c3e50; text-decoration: none;">${cardData.phone2}</a>
          </td>
        </tr>
        <tr>
          <td style="width: 35px; padding: 8px 0; text-align: center;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); border-radius: 50%; line-height: 28px; text-align: center;">✉️</span>
          </td>
          <td style="padding: 8px 0 8px 12px;">
            <a href="mailto:${cardData.email}" style="color: #2980b9; text-decoration: none;">${cardData.email}</a>
          </td>
        </tr>
        <tr>
          <td style="width: 35px; padding: 8px 0; text-align: center;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%); border-radius: 50%; line-height: 28px; text-align: center;">🌐</span>
          </td>
          <td style="padding: 8px 0 8px 12px;">
            <a href="${cardData.websiteUrl}" style="color: #8e44ad; text-decoration: none;">${cardData.website}</a>
          </td>
        </tr>
        <tr>
          <td style="width: 35px; padding: 8px 0; text-align: center; vertical-align: top;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); border-radius: 50%; line-height: 28px; text-align: center;">📍</span>
          </td>
          <td style="padding: 8px 0 8px 12px; vertical-align: top;">
            <span style="color: #2c3e50; font-size: 14px;">${cardData.address}</span><br>
            <span style="color: #7f8c8d; font-size: 13px;">${cardData.addressEn}</span>
          </td>
        </tr>
      </table>
      <div style="height: 4px; background: linear-gradient(90deg, #3498db 0%, #2ecc71 25%, #f39c12 50%, #e74c3c 75%, #9b59b6 100%); margin-top: 25px; border-radius: 2px; opacity: 0.8;"></div>
    </td>
  </tr>
</table>`;
  };

  const generateSimpleHTML = (): string => {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; border-collapse: collapse;">
  <tr>
    <td style="padding-right: 15px; vertical-align: top;">
      <img src="${cardData.imageUrl}" alt="${cardData.name}" width="100" height="100" style="border-radius: 50%; border: 3px solid #e3f2fd; display: block;">
    </td>
    <td style="vertical-align: top;">
      <p style="margin: 0 0 5px 0; font-size: 18px; font-weight: bold; color: #2c3e50;">${cardData.name} <span style="color: #3498db;">${cardData.englishName}</span></p>
      <p style="margin: 0 0 3px 0; font-size: 14px; font-weight: 600; color: #34495e;">${cardData.title}</p>
      <p style="margin: 0 0 3px 0; font-size: 13px; color: #2980b9;">${cardData.company}</p>
      <p style="margin: 0 0 10px 0; font-size: 12px; color: #7f8c8d;">${cardData.department} | <span style="color: #e74c3c;">${cardData.office}</span></p>
      <p style="margin: 0 0 2px 0; font-size: 13px;">📞 <a href="tel:${cardData.phone1.replace(/\s/g, '')}" style="color: #2c3e50; text-decoration: none;">${cardData.phone1}</a> | <a href="tel:${cardData.phone2.replace(/\s/g, '')}" style="color: #2c3e50; text-decoration: none;">${cardData.phone2}</a></p>
      <p style="margin: 0 0 2px 0; font-size: 13px;">✉️ <a href="mailto:${cardData.email}" style="color: #2980b9; text-decoration: none;">${cardData.email}</a></p>
      <p style="margin: 0 0 2px 0; font-size: 13px;">🌐 <a href="${cardData.websiteUrl}" style="color: #8e44ad; text-decoration: none;">${cardData.website}</a></p>
      <p style="margin: 0; font-size: 12px; color: #7f8c8d;">📍 ${cardData.address}<br>${cardData.addressEn}</p>
    </td>
  </tr>
</table>`;
  };

  const copyAsRichText = async (): Promise<void> => {
    try {
      const html = generateFullHTML();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      document.body.appendChild(tempDiv);

      const range = document.createRange();
      range.selectNodeContents(tempDiv);
      const selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        document.body.removeChild(tempDiv);
        setCopied(true);
        setShowFormatMenu(false);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('複製失敗:', err);
      alert('複製失敗，請使用 Chrome、Edge 或 Firefox 瀏覽器。');
    }
  };

  const copyHTMLCode = async (format: 'full' | 'simple'): Promise<void> => {
    try {
      const html = format === 'full' ? generateFullHTML() : generateSimpleHTML();
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setShowFormatMenu(false);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('複製失敗:', err);
      alert('複製失敗，請稍後再試');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '40px', fontSize: '32px', fontWeight: 'bold' }}>
          名片編輯器
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* 左側：編輯表單 */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '24px', color: '#2c3e50', fontSize: '24px' }}>編輯名片資訊</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>姓名</label>
                <input type="text" value={cardData.name} onChange={(e) => handleChange('name', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>英文名稱</label>
                <input type="text" value={cardData.englishName} onChange={(e) => handleChange('englishName', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>職稱</label>
                <input type="text" value={cardData.title} onChange={(e) => handleChange('title', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>公司名稱</label>
                <input type="text" value={cardData.company} onChange={(e) => handleChange('company', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>部門</label>
                <input type="text" value={cardData.department} onChange={(e) => handleChange('department', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>辦公室</label>
                <input type="text" value={cardData.office} onChange={(e) => handleChange('office', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>電話 1</label>
                <input type="text" value={cardData.phone1} onChange={(e) => handleChange('phone1', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>電話 2</label>
                <input type="text" value={cardData.phone2} onChange={(e) => handleChange('phone2', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>Email</label>
                <input type="email" value={cardData.email} onChange={(e) => handleChange('email', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>網站</label>
                <input type="text" value={cardData.website} onChange={(e) => handleChange('website', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>網站網址</label>
                <input type="text" value={cardData.websiteUrl} onChange={(e) => handleChange('websiteUrl', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>地址（中文）</label>
                <input type="text" value={cardData.address} onChange={(e) => handleChange('address', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>地址（英文）</label>
                <input type="text" value={cardData.addressEn} onChange={(e) => handleChange('addressEn', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>頭像網址</label>
                <input type="text" value={cardData.imageUrl} onChange={(e) => handleChange('imageUrl', e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }} />
              </div>
            </div>
          </div>

          {/* 右側：預覽和複製 */}
          <div>
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#2c3e50', fontSize: '24px', margin: 0 }}>預覽</h2>
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={copyAsRichText} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: copied ? '#27ae60' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '600', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                      {copied ? <><Check size={20} />已複製！</> : <><Copy size={20} />複製名片</>}
                    </button>
                    <button onClick={() => setShowFormatMenu(!showFormatMenu)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                      <ChevronDown size={20} />
                    </button>
                  </div>

                  {showFormatMenu && (
                    <div style={{ position: 'absolute', top: '60px', right: 0, background: 'white', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', padding: '8px', minWidth: '320px', zIndex: 1000, border: '1px solid #e0e0e0' }}>
                      <div onClick={copyAsRichText} style={{ padding: '12px 16px', borderRadius: '6px', cursor: 'pointer', borderLeft: '3px solid #667eea' }}>
                        <div style={{ fontWeight: '700', color: '#667eea', marginBottom: '2px' }}>
                          富文本格式 <span style={{ fontSize: '11px', background: '#667eea', color: 'white', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>推薦</span>
                        </div>
                        <div style={{ fontSize: '11px', color: '#95a5a6', marginBottom: '4px' }}>For Webmail 公司信箱</div>
                        <div style={{ fontSize: '12px', color: '#7f8c8d' }}>直接貼到 Gmail、Outlook Web 等網頁版信箱</div>
                      </div>
                      <div style={{ height: '1px', background: '#f0f0f0', margin: '4px 8px' }}></div>
                      <div onClick={() => copyHTMLCode('full')} style={{ padding: '12px 16px', borderRadius: '6px', cursor: 'pointer' }}>
                        <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '2px' }}>完整樣式</div>
                        <div style={{ fontSize: '11px', color: '#95a5a6', marginBottom: '4px' }}>For Outlook、Thunderbird</div>
                        <div style={{ fontSize: '12px', color: '#7f8c8d' }}>HTML 代碼（漸層、陰影等完整樣式）</div>
                      </div>
                      <div style={{ height: '1px', background: '#f0f0f0', margin: '4px 8px' }}></div>
                      <div onClick={() => copyHTMLCode('simple')} style={{ padding: '12px 16px', borderRadius: '6px', cursor: 'pointer' }}>
                        <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '2px' }}>簡易樣式</div>
                        <div style={{ fontSize: '11px', color: '#95a5a6', marginBottom: '4px' }}>For Outlook、Thunderbird</div>
                        <div style={{ fontSize: '12px', color: '#7f8c8d' }}>HTML 代碼（簡化樣式，兼容性更好）</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', background: '#f8f9fa', overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: generateFullHTML() }} />
            </div>

            {/* 使用說明 */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '12px' }}>使用說明</h3>
              <div style={{ background: '#f0f7ff', padding: '14px', borderRadius: '8px', borderLeft: '4px solid #667eea', marginBottom: '16px' }}>
                <div style={{ fontWeight: '600', color: '#667eea', marginBottom: '8px', fontSize: '14px' }}>💡 推薦：富文本格式</div>
                <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>
                  點擊「複製名片」後，直接 Ctrl+V 貼到 Gmail、Outlook 網頁版、公司 Webmail 等，所有樣式自動保留！
                </div>
              </div>
              <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>
                <p style={{ margin: '0 0 12px 0', fontWeight: '600' }}>其他格式（點擊 ▼ 選擇）：</p>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '4px' }}>📧 完整樣式（HTML 代碼）</div>
                  <div style={{ paddingLeft: '16px', color: '#7f8c8d', fontSize: '12px' }}>適合 Outlook 桌面版、Thunderbird<br />包含漸層、陰影等完整樣式效果</div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '4px' }}>📧 簡易樣式（HTML 代碼）</div>
                  <div style={{ paddingLeft: '16px', color: '#7f8c8d', fontSize: '12px' }}>適合 Outlook 桌面版、Thunderbird<br />簡化樣式，兼容性更好</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
