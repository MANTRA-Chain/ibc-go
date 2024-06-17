// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ibc/applications/transfer/v1/authz.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-proto"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Allocation defines the spend limit for a particular port and channel
type Allocation struct {
	// the port on which the packet will be sent
	SourcePort string `protobuf:"bytes,1,opt,name=source_port,json=sourcePort,proto3" json:"source_port,omitempty"`
	// the channel by which the packet will be sent
	SourceChannel string `protobuf:"bytes,2,opt,name=source_channel,json=sourceChannel,proto3" json:"source_channel,omitempty"`
	// spend limitation on the channel
	SpendLimit github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,3,rep,name=spend_limit,json=spendLimit,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"spend_limit"`
	// allow list of receivers, an empty allow list permits any receiver address
	AllowList []string `protobuf:"bytes,4,rep,name=allow_list,json=allowList,proto3" json:"allow_list,omitempty"`
	// allow list of memo strings, an empty list prohibits all memo strings;
	// a list only with "*" permits any memo string
	AllowedPacketData []string `protobuf:"bytes,5,rep,name=allowed_packet_data,json=allowedPacketData,proto3" json:"allowed_packet_data,omitempty"`
	// a list of Allowed hops
	AllowedForwardingHops []*Hops `protobuf:"bytes,6,rep,name=allowed_forwarding_hops,json=allowedForwardingHops,proto3" json:"allowed_forwarding_hops,omitempty"`
}

func (m *Allocation) Reset()         { *m = Allocation{} }
func (m *Allocation) String() string { return proto.CompactTextString(m) }
func (*Allocation) ProtoMessage()    {}
func (*Allocation) Descriptor() ([]byte, []int) {
	return fileDescriptor_b1a28b55d17325aa, []int{0}
}
func (m *Allocation) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Allocation) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Allocation.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Allocation) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Allocation.Merge(m, src)
}
func (m *Allocation) XXX_Size() int {
	return m.Size()
}
func (m *Allocation) XXX_DiscardUnknown() {
	xxx_messageInfo_Allocation.DiscardUnknown(m)
}

var xxx_messageInfo_Allocation proto.InternalMessageInfo

func (m *Allocation) GetSourcePort() string {
	if m != nil {
		return m.SourcePort
	}
	return ""
}

func (m *Allocation) GetSourceChannel() string {
	if m != nil {
		return m.SourceChannel
	}
	return ""
}

func (m *Allocation) GetSpendLimit() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.SpendLimit
	}
	return nil
}

func (m *Allocation) GetAllowList() []string {
	if m != nil {
		return m.AllowList
	}
	return nil
}

func (m *Allocation) GetAllowedPacketData() []string {
	if m != nil {
		return m.AllowedPacketData
	}
	return nil
}

func (m *Allocation) GetAllowedForwardingHops() []*Hops {
	if m != nil {
		return m.AllowedForwardingHops
	}
	return nil
}

// Hops represent a list of Hop
type Hops struct {
	Hops []Hop `protobuf:"bytes,1,rep,name=hops,proto3" json:"hops"`
}

func (m *Hops) Reset()         { *m = Hops{} }
func (m *Hops) String() string { return proto.CompactTextString(m) }
func (*Hops) ProtoMessage()    {}
func (*Hops) Descriptor() ([]byte, []int) {
	return fileDescriptor_b1a28b55d17325aa, []int{1}
}
func (m *Hops) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Hops) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Hops.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Hops) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Hops.Merge(m, src)
}
func (m *Hops) XXX_Size() int {
	return m.Size()
}
func (m *Hops) XXX_DiscardUnknown() {
	xxx_messageInfo_Hops.DiscardUnknown(m)
}

var xxx_messageInfo_Hops proto.InternalMessageInfo

func (m *Hops) GetHops() []Hop {
	if m != nil {
		return m.Hops
	}
	return nil
}

// TransferAuthorization allows the grantee to spend up to spend_limit coins from
// the granter's account for ibc transfer on a specific channel
type TransferAuthorization struct {
	// port and channel amounts
	Allocations []Allocation `protobuf:"bytes,1,rep,name=allocations,proto3" json:"allocations"`
}

func (m *TransferAuthorization) Reset()         { *m = TransferAuthorization{} }
func (m *TransferAuthorization) String() string { return proto.CompactTextString(m) }
func (*TransferAuthorization) ProtoMessage()    {}
func (*TransferAuthorization) Descriptor() ([]byte, []int) {
	return fileDescriptor_b1a28b55d17325aa, []int{2}
}
func (m *TransferAuthorization) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TransferAuthorization) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TransferAuthorization.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TransferAuthorization) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransferAuthorization.Merge(m, src)
}
func (m *TransferAuthorization) XXX_Size() int {
	return m.Size()
}
func (m *TransferAuthorization) XXX_DiscardUnknown() {
	xxx_messageInfo_TransferAuthorization.DiscardUnknown(m)
}

var xxx_messageInfo_TransferAuthorization proto.InternalMessageInfo

func (m *TransferAuthorization) GetAllocations() []Allocation {
	if m != nil {
		return m.Allocations
	}
	return nil
}

func init() {
	proto.RegisterType((*Allocation)(nil), "ibc.applications.transfer.v1.Allocation")
	proto.RegisterType((*Hops)(nil), "ibc.applications.transfer.v1.Hops")
	proto.RegisterType((*TransferAuthorization)(nil), "ibc.applications.transfer.v1.TransferAuthorization")
}

func init() {
	proto.RegisterFile("ibc/applications/transfer/v1/authz.proto", fileDescriptor_b1a28b55d17325aa)
}

var fileDescriptor_b1a28b55d17325aa = []byte{
	// 499 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0xc1, 0x6e, 0x13, 0x3d,
	0x10, 0xce, 0x36, 0xf9, 0x2b, 0xc5, 0xd1, 0x8f, 0xc4, 0x42, 0xc5, 0xb6, 0x82, 0x4d, 0x88, 0x04,
	0x5a, 0x09, 0xc5, 0x26, 0x70, 0x00, 0xc1, 0xa9, 0x09, 0x42, 0x1c, 0x7a, 0x08, 0x11, 0xa7, 0x5e,
	0x56, 0x5e, 0xaf, 0x9b, 0xb5, 0xea, 0xec, 0xac, 0xd6, 0xde, 0x54, 0xf4, 0x29, 0xe0, 0x35, 0x38,
	0xf3, 0x10, 0x15, 0xa7, 0x1e, 0x39, 0x01, 0x4a, 0xce, 0xbc, 0x03, 0x5a, 0xdb, 0x09, 0x41, 0x48,
	0xe1, 0x64, 0xfb, 0x9b, 0x6f, 0xbe, 0x19, 0xcf, 0x37, 0x28, 0x12, 0x09, 0x23, 0xb4, 0x28, 0xa4,
	0x60, 0x54, 0x0b, 0xc8, 0x15, 0xd1, 0x25, 0xcd, 0xd5, 0x19, 0x2f, 0xc9, 0x62, 0x48, 0x68, 0xa5,
	0xb3, 0x4b, 0x5c, 0x94, 0xa0, 0xc1, 0xbf, 0x2b, 0x12, 0x86, 0xb7, 0x99, 0x78, 0xcd, 0xc4, 0x8b,
	0xe1, 0xd1, 0x21, 0x03, 0x35, 0x07, 0x15, 0x1b, 0x2e, 0xb1, 0x0f, 0x9b, 0x78, 0x74, 0x7b, 0x06,
	0x33, 0xb0, 0x78, 0x7d, 0x73, 0x68, 0x68, 0x39, 0x24, 0xa1, 0x8a, 0x93, 0xc5, 0x30, 0xe1, 0x9a,
	0x0e, 0x09, 0x03, 0x91, 0xbb, 0xf8, 0xa3, 0x9d, 0x8d, 0x6d, 0x4a, 0x1b, 0x72, 0xff, 0xe7, 0x1e,
	0x42, 0xc7, 0x52, 0x82, 0xa5, 0xfa, 0x5d, 0xd4, 0x51, 0x50, 0x95, 0x8c, 0xc7, 0x05, 0x94, 0x3a,
	0xf0, 0x7a, 0x5e, 0xd4, 0x9e, 0x22, 0x0b, 0x4d, 0xa0, 0xd4, 0xfe, 0x03, 0x74, 0xc3, 0x11, 0x58,
	0x46, 0xf3, 0x9c, 0xcb, 0x60, 0xcf, 0x70, 0xfe, 0xb7, 0xe8, 0xd8, 0x82, 0xbe, 0x44, 0x1d, 0x55,
	0xf0, 0x3c, 0x8d, 0xa5, 0x98, 0x0b, 0x1d, 0x34, 0x7b, 0xcd, 0xa8, 0xf3, 0xe4, 0x10, 0xbb, 0xdf,
	0xd5, 0x9d, 0x63, 0xd7, 0x39, 0x1e, 0x83, 0xc8, 0x47, 0x8f, 0xaf, 0xbe, 0x75, 0x1b, 0x9f, 0xbe,
	0x77, 0xa3, 0x99, 0xd0, 0x59, 0x95, 0x60, 0x06, 0x73, 0x37, 0x0a, 0x77, 0x0c, 0x54, 0x7a, 0x4e,
	0xf4, 0xfb, 0x82, 0x2b, 0x93, 0xa0, 0xa6, 0xc8, 0xe8, 0x9f, 0xd4, 0xf2, 0xfe, 0x3d, 0x84, 0xa8,
	0x94, 0x70, 0x11, 0x4b, 0xa1, 0x74, 0xd0, 0xea, 0x35, 0xa3, 0xf6, 0xb4, 0x6d, 0x90, 0x13, 0xa1,
	0xb4, 0x8f, 0xd1, 0x2d, 0xf3, 0xe0, 0x69, 0x5c, 0x50, 0x76, 0xce, 0x75, 0x9c, 0x52, 0x4d, 0x83,
	0xff, 0x0c, 0xef, 0xa6, 0x0b, 0x4d, 0x4c, 0xe4, 0x15, 0xd5, 0xd4, 0x3f, 0x45, 0x77, 0xd6, 0xfc,
	0x33, 0x28, 0x2f, 0x68, 0x99, 0x8a, 0x7c, 0x16, 0x67, 0x50, 0xa8, 0x60, 0xdf, 0x7c, 0xa4, 0x8f,
	0x77, 0x39, 0x8a, 0xdf, 0x40, 0xa1, 0xa6, 0x07, 0x4e, 0xe2, 0xf5, 0x46, 0xa1, 0x86, 0xfb, 0x63,
	0xd4, 0xaa, 0x4f, 0xff, 0x25, 0x6a, 0x19, 0x41, 0xcf, 0x08, 0xde, 0xff, 0xa7, 0xe0, 0xa8, 0x55,
	0x4f, 0x68, 0x6a, 0x92, 0xfa, 0x1f, 0x3d, 0x74, 0xf0, 0xce, 0xc5, 0x8f, 0x2b, 0x9d, 0x41, 0x29,
	0x2e, 0xad, 0x7f, 0x13, 0xd4, 0xa1, 0x1b, 0x37, 0xd7, 0xea, 0xd1, 0x6e, 0xf5, 0xdf, 0xf6, 0xbb,
	0x22, 0xdb, 0x12, 0x2f, 0x1e, 0x7e, 0xf9, 0x3c, 0xe8, 0x3b, 0xdf, 0xec, 0x52, 0xaf, 0x8d, 0xfb,
	0xa3, 0xf2, 0xe8, 0xed, 0xd5, 0x32, 0xf4, 0xae, 0x97, 0xa1, 0xf7, 0x63, 0x19, 0x7a, 0x1f, 0x56,
	0x61, 0xe3, 0x7a, 0x15, 0x36, 0xbe, 0xae, 0xc2, 0xc6, 0xe9, 0xb3, 0xbf, 0x3d, 0x15, 0x09, 0x1b,
	0xcc, 0x80, 0x2c, 0x9e, 0x93, 0x39, 0xa4, 0x95, 0xe4, 0xaa, 0xde, 0xd7, 0xad, 0x3d, 0x35, 0x46,
	0x27, 0xfb, 0x66, 0x45, 0x9f, 0xfe, 0x0a, 0x00, 0x00, 0xff, 0xff, 0x15, 0xa0, 0x49, 0xcf, 0x6a,
	0x03, 0x00, 0x00,
}

func (m *Allocation) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Allocation) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Allocation) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.AllowedForwardingHops) > 0 {
		for iNdEx := len(m.AllowedForwardingHops) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.AllowedForwardingHops[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintAuthz(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.AllowedPacketData) > 0 {
		for iNdEx := len(m.AllowedPacketData) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.AllowedPacketData[iNdEx])
			copy(dAtA[i:], m.AllowedPacketData[iNdEx])
			i = encodeVarintAuthz(dAtA, i, uint64(len(m.AllowedPacketData[iNdEx])))
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.AllowList) > 0 {
		for iNdEx := len(m.AllowList) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.AllowList[iNdEx])
			copy(dAtA[i:], m.AllowList[iNdEx])
			i = encodeVarintAuthz(dAtA, i, uint64(len(m.AllowList[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.SpendLimit) > 0 {
		for iNdEx := len(m.SpendLimit) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SpendLimit[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintAuthz(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.SourceChannel) > 0 {
		i -= len(m.SourceChannel)
		copy(dAtA[i:], m.SourceChannel)
		i = encodeVarintAuthz(dAtA, i, uint64(len(m.SourceChannel)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.SourcePort) > 0 {
		i -= len(m.SourcePort)
		copy(dAtA[i:], m.SourcePort)
		i = encodeVarintAuthz(dAtA, i, uint64(len(m.SourcePort)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Hops) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Hops) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Hops) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Hops) > 0 {
		for iNdEx := len(m.Hops) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Hops[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintAuthz(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *TransferAuthorization) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TransferAuthorization) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TransferAuthorization) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Allocations) > 0 {
		for iNdEx := len(m.Allocations) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Allocations[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintAuthz(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintAuthz(dAtA []byte, offset int, v uint64) int {
	offset -= sovAuthz(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Allocation) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.SourcePort)
	if l > 0 {
		n += 1 + l + sovAuthz(uint64(l))
	}
	l = len(m.SourceChannel)
	if l > 0 {
		n += 1 + l + sovAuthz(uint64(l))
	}
	if len(m.SpendLimit) > 0 {
		for _, e := range m.SpendLimit {
			l = e.Size()
			n += 1 + l + sovAuthz(uint64(l))
		}
	}
	if len(m.AllowList) > 0 {
		for _, s := range m.AllowList {
			l = len(s)
			n += 1 + l + sovAuthz(uint64(l))
		}
	}
	if len(m.AllowedPacketData) > 0 {
		for _, s := range m.AllowedPacketData {
			l = len(s)
			n += 1 + l + sovAuthz(uint64(l))
		}
	}
	if len(m.AllowedForwardingHops) > 0 {
		for _, e := range m.AllowedForwardingHops {
			l = e.Size()
			n += 1 + l + sovAuthz(uint64(l))
		}
	}
	return n
}

func (m *Hops) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Hops) > 0 {
		for _, e := range m.Hops {
			l = e.Size()
			n += 1 + l + sovAuthz(uint64(l))
		}
	}
	return n
}

func (m *TransferAuthorization) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Allocations) > 0 {
		for _, e := range m.Allocations {
			l = e.Size()
			n += 1 + l + sovAuthz(uint64(l))
		}
	}
	return n
}

func sovAuthz(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAuthz(x uint64) (n int) {
	return sovAuthz(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Allocation) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Allocation: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Allocation: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SourcePort", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SourcePort = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SourceChannel", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SourceChannel = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpendLimit", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SpendLimit = append(m.SpendLimit, types.Coin{})
			if err := m.SpendLimit[len(m.SpendLimit)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AllowList", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AllowList = append(m.AllowList, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AllowedPacketData", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AllowedPacketData = append(m.AllowedPacketData, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AllowedForwardingHops", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AllowedForwardingHops = append(m.AllowedForwardingHops, &Hops{})
			if err := m.AllowedForwardingHops[len(m.AllowedForwardingHops)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuthz(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuthz
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Hops) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Hops: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Hops: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Hops", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Hops = append(m.Hops, Hop{})
			if err := m.Hops[len(m.Hops)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuthz(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuthz
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *TransferAuthorization) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TransferAuthorization: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TransferAuthorization: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Allocations", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Allocations = append(m.Allocations, Allocation{})
			if err := m.Allocations[len(m.Allocations)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuthz(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuthz
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAuthz(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAuthz
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAuthz
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAuthz
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAuthz        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAuthz          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAuthz = fmt.Errorf("proto: unexpected end of group")
)
